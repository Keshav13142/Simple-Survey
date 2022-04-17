package com.survey.springapp.survey;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SurveyService {
    private final SurveyRepository surveyRepository;

    @Autowired
    public SurveyService(SurveyRepository surveyRepository) {
        this.surveyRepository = surveyRepository;
    }

    public List<Survey> getAllSurveys() {
        return this.surveyRepository.findAll();
    }

    public void saveSurvey(Survey survey) {
        this.surveyRepository.save(survey);
    }

    public void editSurvey(Survey survey, Long id) {
        if(this.surveyRepository.existsById(id))
        {
            survey.setResponses(new ArrayList<>());
            this.surveyRepository.save(survey);
        }
        else{
            throw new IllegalStateException("Survey does not exist");
        }
    }

    public void deleteSurvey(Long id) {
        if(this.surveyRepository.existsById(id)){
        this.surveyRepository.deleteSurveyBySurveyId(id);
        }
        else{
            throw new IllegalStateException("Survey Does not Exist");
        }
    }

    public Survey checkUrl(String url) {
//        System.out.println(this.surveyRepository.findSurveyByUrl(url));
        Survey survey=this.surveyRepository.findSurveyByUrl(url);
        if(survey!=null)
            return survey;
        else
            throw new IllegalStateException("Survey not found");
    }
}
