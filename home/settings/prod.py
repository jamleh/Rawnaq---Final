'''Use this for production'''

from .base import *

DEBUG = False
ALLOWED_HOSTS += ['http://domain.com']
# ALLOWED_HOSTS += ['127.0.0.1']
WSGI_APPLICATION = 'home.wsgi.prod.application'

DATABASES = {
 'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': '4Tj5slbYk9',
        'USER': '4Tj5slbYk9',
        'PASSWORD': 'cTBVuQeJzX',
        'PORT': '3306',
        'HOST': 'remotemysql.com',
    }
}


AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator'},
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator'},
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator'},
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator'},
]

STATICFILES_STORAGE = 'whitenoise.django.GzipManifestStaticFilesStorage'
