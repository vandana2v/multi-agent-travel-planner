from fastapi import Request

async def verify_user(request: Request):
    return True