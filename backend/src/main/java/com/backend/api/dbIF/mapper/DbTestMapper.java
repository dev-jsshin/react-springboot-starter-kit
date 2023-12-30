package com.backend.api.dbIF.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface DbTestMapper {

    String dbConnection();
}
