package com.backend.module.common.dto;

import com.backend.module.common.enums.StatusCode;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@RequiredArgsConstructor
public class ResponseDto {

    private final Boolean success;
    private final Integer code;
    private final String message;

    public static ResponseDto of(Boolean success, StatusCode statusCode) {
        return new ResponseDto(success, statusCode.getCode(), statusCode.getMessage());
    }

    public static ResponseDto of(Boolean success, StatusCode statusCode, Exception e) {
        return new ResponseDto(success, statusCode.getCode(), statusCode.getMessage(e));
    }

    public static ResponseDto of(Boolean success, StatusCode statusCode, String message) {
        return new ResponseDto(success, statusCode.getCode(), statusCode.getMessage(message));
    }
}
