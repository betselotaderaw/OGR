package com.dulcons.ogr.repository;

import com.dulcons.ogr.domain.InitialReview;
import com.dulcons.ogr.domain.TechnicalReview;
import java.util.Set;
import org.springframework.data.repository.CrudRepository;

public interface TechnicalReviewRepository extends CrudRepository<TechnicalReview, Long> {
    Set<TechnicalReview> findByLicence_Id(Long id);
}
