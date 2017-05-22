package com.iqmsoft.boot.react.material;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ThoughtRepository extends JpaRepository<Thought, Long> {
    List<Thought> findAllByOrderByIdDesc();
}
