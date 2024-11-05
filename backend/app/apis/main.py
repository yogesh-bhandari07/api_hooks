from fastapi import FastAPI, HTTPException, Depends
from sqlalchemy.orm import Session
from .database import get_db
from .models import HttpMethod, HttpStatusCode, ApisItem
from .schemas import HttpMethodCreate, HttpStatusCodeCreate, ApisItemCreate, ApisItemUpdate

app = FastAPI()

@app.post("/http_methods/", response_model=HttpMethod)
def create_http_method(http_method: HttpMethodCreate, db: Session = Depends(get_db)):
    db_method = HttpMethod(method=http_method.method)
    db.add(db_method)
    db.commit()
    db.refresh(db_method)
    return db_method

@app.get("/http_methods/{method_id}", response_model=HttpMethod)
def read_http_method(method_id: int, db: Session = Depends(get_db)):
    method = db.query(HttpMethod).filter(HttpMethod.id == method_id).first()
    if method is None:
        raise HTTPException(status_code=404, detail="HTTP Method not found")
    return method

@app.delete("/http_methods/{method_id}", response_model=HttpMethod)
def delete_http_method(method_id: int, db: Session = Depends(get_db)):
    method = db.query(HttpMethod).filter(HttpMethod.id == method_id).first()
    if method is None:
        raise HTTPException(status_code=404, detail="HTTP Method not found")
    db.delete(method)
    db.commit()
    return method

# Similar CRUD operations for HttpStatusCode
@app.post("/http_status_codes/", response_model=HttpStatusCode)
def create_http_status_code(status_code: HttpStatusCodeCreate, db: Session = Depends(get_db)):
    db_status_code = HttpStatusCode(code=status_code.code, description=status_code.description)
    db.add(db_status_code)
    db.commit()
    db.refresh(db_status_code)
    return db_status_code

@app.get("/http_status_codes/{code_id}", response_model=HttpStatusCode)
def read_http_status_code(code_id: int, db: Session = Depends(get_db)):
    status_code = db.query(HttpStatusCode).filter(HttpStatusCode.id == code_id).first()
    if status_code is None:
        raise HTTPException(status_code=404, detail="HTTP Status Code not found")
    return status_code

@app.delete("/http_status_codes/{code_id}", response_model=HttpStatusCode)
def delete_http_status_code(code_id: int, db: Session = Depends(get_db)):
    status_code = db.query(HttpStatusCode).filter(HttpStatusCode.id == code_id).first()
    if status_code is None:
        raise HTTPException(status_code=404, detail="HTTP Status Code not found")
    db.delete(status_code)
    db.commit()
    return status_code

# CRUD operations for ApisItem
@app.post("/apis_items/", response_model=ApisItem)
def create_apis_item(apis_item: ApisItemCreate, db: Session = Depends(get_db)):
    db_apis_item = ApisItem(**apis_item.dict())
    db.add(db_apis_item)
    db.commit()
    db.refresh(db_apis_item)
    return db_apis_item

@app.get("/apis_items/{item_id}", response_model=ApisItem)
def read_apis_item(item_id: int, db: Session = Depends(get_db)):
    apis_item = db.query(ApisItem).filter(ApisItem.id == item_id).first()
    if apis_item is None:
        raise HTTPException(status_code=404, detail="API Item not found")
    return apis_item

@app.put("/apis_items/{item_id}", response_model=ApisItem)
def update_apis_item(item_id: int, apis_item: ApisItemUpdate, db: Session = Depends(get_db)):
    db_apis_item = db.query(ApisItem).filter(ApisItem.id == item_id).first()
    if db_apis_item is None:
        raise HTTPException(status_code=404, detail="API Item not found")
    for key, value in apis_item.dict(exclude_unset=True).items():
        setattr(db_apis_item, key, value)
    db.commit()
    db.refresh(db_apis_item)
    return db_apis_item

@app.delete("/apis_items/{item_id}", response_model=ApisItem)
def delete_apis_item(item_id: int, db: Session = Depends(get_db)):
    db_apis_item = db.query(ApisItem).filter(ApisItem.id == item_id).first()
    if db_apis_item is None:
        raise HTTPException(status_code=404, detail="API Item not found")
    db.delete(db_apis_item)
    db.commit()
    return db_apis_item
