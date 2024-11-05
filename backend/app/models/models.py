from sqlalchemy import Column, Integer, DateTime, func
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import declared_attr

Base = declarative_base()

class BaseModel(Base):
    __abstract__ = True  

    id = Column(Integer, primary_key=True, autoincrement=True) 
    created_at = Column(DateTime, default=func.now()) 
    updated_at = Column(DateTime, default=func.now(),onupdate=func.now()) 
    deleted_at = Column(DateTime, nullable=True) 

    @declared_attr
    def __tablename__(cls):
        return cls.__name__.lower() 

    def soft_delete(self):
        """Method to mark a record as deleted."""
        self.deleted_at = func.now()

class HttpMethod(BaseModel):
    __tablename__ = "http_methods"
    
    method = Column(String, unique=True, index=True) 

class HttpStatusCode(BaseModel):
    __tablename__ = "http_status_codes"
    
    code = Column(Integer, unique=True, index=True)  
    description = Column(String) 

class ApisItem(BaseModel):
    __tablename__ = "apis_items"
    
    uuid = Column(String, unique=True, default=lambda: str(uuid.uuid4()))  
    method_id = Column(Integer, ForeignKey('http_methods.id'), index=True)  
    name = Column(String)  
    description = Column(String)  
    secret_key = Column(String)  
    status_code_id = Column(Integer, ForeignKey('http_status_codes.id'), index=True)  
    header = Column(String, index=True)
    body = Column(String, index=True)

    method = relationship("HttpMethod")  
    status_code = relationship("HttpStatusCode")  

    def __repr__(self):
        return (f"<ApisItem(id={self.id}, uuid='{self.uuid}', "
                f"method='{self.method.method}', status_code='{self.status_code.code}')>")
