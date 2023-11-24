package com.backend.dbIF.controller;

import com.backend.common.dto.DataResponseDto;
import com.backend.dbIF.service.DbTestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/db")
public class DbTestController {

    @Autowired
    DbTestService dbTestservice;

    /*
     * http://localhost:8080/db/connection"
     *
     * "success": true,
     * "code": 0,
     * "message": "Ok",
     * "data": "CONNECTION SUCCESS"
     */
    @GetMapping(path = "/connection")
    public DataResponseDto<Object> dbConnection() {

        try {
            return DataResponseDto.of(dbTestservice.dbConnection());
        } catch (Exception e) {
            throw e;
        }
    }
}
