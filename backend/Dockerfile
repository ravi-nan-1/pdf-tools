FROM python:3.11-slim

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    poppler-utils \
    libglib2.0-0 \
    libsm6 \
    libxext6 \
    libxrender1 \
    ghostscript \
    tesseract-ocr \
    libreoffice \
    wkhtmltopdf \
    curl \
    git \
    && rm -rf /var/lib/apt/lists/*

# Install pip packages
WORKDIR /app
COPY requirements.txt /app/requirements.txt
RUN pip install --upgrade pip
RUN pip install -r /app/requirements.txt

COPY . /app

EXPOSE 8000

# Use a simple cmd for Render: read PORT env var
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--workers", "1"]
