package com.backend.bsIF.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class helloController {

    @GetMapping(value = "/bs/test")
    public String test(@RequestBody(required = true) String requestBody) throws Exception {
        // throw new ApiException(ExceptionEnum.SECURITY_01);
        return "success";
    }
}
