package com.backend.module.common.exception;

import com.backend.module.common.enums.StatusCode;
import lombok.Getter;

@Getter
public class GeneralException extends RuntimeException {

    private final StatusCode statusCode;

    public GeneralException() {
        super(StatusCode.INTERNAL_ERROR.getMessage());
        this.statusCode = StatusCode.INTERNAL_ERROR;
    }

    public GeneralException(String message) {
        super(StatusCode.INTERNAL_ERROR.getMessage(message));
        this.statusCode = StatusCode.INTERNAL_ERROR;
    }

    public GeneralException(String message, Throwable cause) {
        super(StatusCode.INTERNAL_ERROR.getMessage(message), cause);
        this.statusCode = StatusCode.INTERNAL_ERROR;
    }

    public GeneralException(Throwable cause) {
        super(StatusCode.INTERNAL_ERROR.getMessage(cause));
        this.statusCode = StatusCode.INTERNAL_ERROR;
    }

    public GeneralException(StatusCode errorCode) {
        super(errorCode.getMessage());
        this.statusCode = errorCode;
    }

    public GeneralException(StatusCode errorCode, String message) {
        super(errorCode.getMessage(message));
        this.statusCode = errorCode;
    }

    public GeneralException(StatusCode errorCode, String message, Throwable cause) {
        super(errorCode.getMessage(message), cause);
        this.statusCode = errorCode;
    }

    public GeneralException(StatusCode errorCode, Throwable cause) {
        super(errorCode.getMessage(cause), cause);
        this.statusCode = errorCode;
    }
}

