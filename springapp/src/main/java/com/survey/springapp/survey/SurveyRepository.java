package com.survey.springapp.survey;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface SurveyRepository  extends JpaRepository<Survey,Long> {
    Survey findSurveyByUrl(String url);

    void deleteSurveyBySurveyId(Long id);

}