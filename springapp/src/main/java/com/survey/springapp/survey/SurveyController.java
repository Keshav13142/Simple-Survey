package com.survey.springapp.survey;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("api/survey")
public class SurveyController {
    private final SurveyService surveyService;

    @Autowired
    public SurveyController(SurveyService surveyService) {
        this.surveyService = surveyService;
    }

    @GetMapping("")
    public ResponseEntity<List<Survey>> getAllSurveys()
    {
        return ResponseEntity.ok().body(this.surveyService.getAllSurveys());
    }

    @PutMapping("/saveResponse")
    public ResponseEntity<?> saveResponse(@RequestBody Survey survey)
    {
        this.surveyService.saveSurvey(survey);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/add")
    public ResponseEntity<?> saveSurvey(@RequestBody Survey survey)
    {
        this.surveyService.saveSurvey(survey);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/edit/{id}")
    public ResponseEntity<?> editSurvey(@RequestBody Survey survey,@PathVariable Long id)
    {
        this.surveyService.editSurvey(survey,id);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteSurvey(@PathVariable Long id)
    {
        this.surveyService.deleteSurvey(id);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/checkUrl")
    public ResponseEntity<Survey> checkUrl(@RequestBody String url)
    {
        return ResponseEntity.ok().body(this.surveyService.checkUrl(url));
    }


}
