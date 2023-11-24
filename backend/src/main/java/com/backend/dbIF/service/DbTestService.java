package com.backend.dbIF.service;

import com.backend.dbIF.mapper.DbTestMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DbTestService {

    @Autowired
    DbTestMapper dbTestMapper;

    public String dbConnection() {
        return dbTestMapper.dbConnection();
    }
}

