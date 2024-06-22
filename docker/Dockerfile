FROM python:3.12

WORKDIR /app

COPY /backend/requirements.txt ./requirements.txt

RUN pip install --no-cache-dir --upgrade -r requirements.txt

COPY /backend/src ./src

WORKDIR /app/src

CMD ["uvicorn", "main:app",  "--host", "0.0.0.0", "--port", "8000"]
