FROM python:3.11-slim

ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update && apt-get install -y --no-install-recommends \
    wget \
    unzip \
    gnupg \
    default-jre \
    tesseract-ocr \
    libtesseract-dev \
    poppler-utils \
    ghostscript \
    qpdf \
    imagemagick \
    libsm6 libxrender1 libfontconfig1 libxext6 \
    libreoffice \
    build-essential \
    python3-dev \
    pkg-config \
    libxml2-dev libxslt-dev libjpeg-dev zlib1g-dev \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY requirements.txt ./
RUN pip install --upgrade pip && pip install -r requirements.txt

COPY . /app

EXPOSE 8000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--workers", "1"]
