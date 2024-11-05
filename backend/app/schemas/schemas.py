from pydantic import BaseModel
from typing import Optional

class HttpMethodCreate(BaseModel):
    method: str

class HttpMethod(HttpMethodCreate):
    id: int
    created_at: str
    updated_at: str
    deleted_at: Optional[str] = None

    class Config:
        orm_mode = True

class HttpStatusCodeCreate(BaseModel):
    code: int
    description: Optional[str] = None

class HttpStatusCode(HttpStatusCodeCreate):
    id: int
    created_at: str
    updated_at: str
    deleted_at: Optional[str] = None

    class Config:
        orm_mode = True

class ApisItemCreate(BaseModel):
    uuid: Optional[str] = None
    method_id: int
    name: str
    description: str
    secret_key: str
    status_code_id: int
    header: str
    body: str

class ApisItem(ApisItemCreate):
    id: int
    created_at: str
    updated_at: str
    deleted_at: Optional[str] = None

    class Config:
        orm_mode = True

class ApisItemUpdate(BaseModel):
    method_id: Optional[int] = None
    name: Optional[str] = None
    description: Optional[str] = None
    secret_key: Optional[str] = None
    status_code_id: Optional[int] = None
    header: Optional[str] = None
    body: Optional[str] = None
