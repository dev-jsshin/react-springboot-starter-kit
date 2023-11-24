package com.backend.dbIF.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface DbTestMapper {

    String dbConnection();
}
