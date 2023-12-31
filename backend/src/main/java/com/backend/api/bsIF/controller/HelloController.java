package com.backend.api.bsIF.controller;

import com.backend.module.common.dto.DataResponseDto;
import com.backend.module.common.enums.StatusCode;
import com.backend.module.common.exception.GeneralException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/bs")
public class HelloController {

    /*
     * http://localhost:8080/bs
     */
    @GetMapping(value = "")
    public String basic() throws Exception {
        return "success";
    }

    /*
    * http://localhost:8080/bs/required
    */
    @GetMapping(value = "/required")
    public String test(@RequestBody(required = true) String param) throws Exception {
        return "success";
    }

    /*
     * http://localhost:8080/bs/resdto
     *
     *  "success": true,
     *  "code": 0,
     *  "message": "Ok",
     *  "data": [
     *    1,
     *    2,
     *    3
     *  ]
     */
    @GetMapping(path = "/resdto")
    public DataResponseDto<Object> get() {
        return DataResponseDto.of(List.of(1, 2, 3));
    }

    /*
     * http://localhost:8080/bs/resdto/error/custom
     *
     *  "success": false,
     *  "code": 10001,
     *  "message": "Validation error - Forced Error"
     */
    @GetMapping(path = "/resdto/error/custom")
    public DataResponseDto<Object> errorWithCustomException() {
        if (!false) {
            throw new GeneralException(StatusCode.VALIDATION_ERROR, "Forced Error");
        }

        return DataResponseDto.empty();
    }

    /*
     * http://localhost:8080/bs/resdto/error/exception
     *
     *  "success": false,
     *  "code": 20000,
     *  "message": "Internal error - null"
     */
    @GetMapping(path = "/resdto/error/exception")
    public DataResponseDto<Object> errorWithException() {
        try {
            List<Integer> list = List.of(1, 2, 3, 4, 5, null);
        } catch (Exception e) {
            throw e;
        }

        return DataResponseDto.empty();
    }
}
