package com.survey.springapp.survey;

import com.survey.springapp.response.Response;

import javax.persistence.*;
import java.util.List;

@Entity(name = "Survey")
@Table(name = "survey")
public class Survey {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long surveyId;
    private String question;
    private String url;
    @OneToMany (cascade = CascadeType.ALL,fetch = FetchType.EAGER)
    private List<Response> responses;

    public Survey() {
    }

    public Survey(String question, String url) {
        this.question = question;
        this.url = url;
    }

    public Survey(String question, String url, List<Response> responses) {
        this.question = question;
        this.url = url;
        this.responses = responses;
    }

    public Long getSurveyId() {
        return surveyId;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public List<Response> getResponses() {
        return responses;
    }

    public void setResponses(List<Response> responses) {
        this.responses = responses;
    }

    @Override
    public String toString() {
        return "Survey{" +
                "surveyId=" + surveyId +
                ", question='" + question + '\'' +
                ", url='" + url + '\'' +
                ", responses=" + responses +
                '}';
    }
}
