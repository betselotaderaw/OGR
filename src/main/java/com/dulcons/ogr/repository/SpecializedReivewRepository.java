package com.dulcons.ogr.repository;

import com.dulcons.ogr.domain.InitialReview;
import com.dulcons.ogr.domain.Licence;
import com.dulcons.ogr.domain.SpecializedReivew;
import java.util.Set;
import org.springframework.data.repository.CrudRepository;

public interface SpecializedReivewRepository extends CrudRepository<SpecializedReivew, Long> {
    void deleteByLicence(Licence licence);
    Set<SpecializedReivew> findByLicence_Id(Long id);
}
