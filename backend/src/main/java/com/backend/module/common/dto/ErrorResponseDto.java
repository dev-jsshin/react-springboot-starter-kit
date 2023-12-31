package com.backend.module.common.dto;

import com.backend.module.common.enums.StatusCode;

public class ErrorResponseDto extends ResponseDto {

    private ErrorResponseDto(StatusCode errorCode) {
        super(false, errorCode.getCode(), errorCode.getMessage());
    }

    private ErrorResponseDto(StatusCode errorCode, Exception e) {
        super(false, errorCode.getCode(), errorCode.getMessage(e));
    }

    private ErrorResponseDto(StatusCode errorCode, String message) {
        super(false, errorCode.getCode(), errorCode.getMessage(message));
    }

    public static ErrorResponseDto of(StatusCode errorCode) {
        return new ErrorResponseDto(errorCode);
    }

    public static ErrorResponseDto of(StatusCode errorCode, Exception e) {
        return new ErrorResponseDto(errorCode, e);
    }

    public static ErrorResponseDto of(StatusCode errorCode, String message) {
        return new ErrorResponseDto(errorCode, message);
    }
}
