import { Component } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selected-course',
  templateUrl: './selected-course.component.html',
  styleUrl: './selected-course.component.css'
})
export class SelectedCourseComponent {
  selectedCourse: string = '';
  selectedLevel: string = '';
  allQuestions: any[] = [];
  filteredQuestions: any[] = [];
  userAnswers: { [key: number]: string } = {};
  score: number = 0;
  submitted: boolean = false;
  totalTime: number = 300;  
  timeLeft: number = this.totalTime; 
  timer: any;  
  isTimeUp: boolean = false;  
  currentQuestionIndex: number = 0; 
  quizStarted: boolean = false;

  constructor(private quiz: QuizService, private route: Router) {}

  ngOnInit(): void {
    this.quiz.getQuestions().subscribe(data => {
      this.allQuestions = data;
      console.log("Questions Loaded:", this.allQuestions);
    });
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearInterval(this.timer); 
    }
  }

  startTimer() {
    this.timer = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.isTimeUp = true;
        clearInterval(this.timer);
        this.submitQuiz();  
      }
    }, 1000);
  }

  prevQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.filteredQuestions.length - 1) {
      this.currentQuestionIndex++;
    }
  }

  selectCourse(course: string) {
    this.selectedCourse = course;
    this.submitted = false;
    this.filteredQuestions = [];
    this.userAnswers = {};
    this.selectedLevel = '';
  }

  filterQuestions() {
    if (this.selectedCourse && this.selectedLevel) {
      localStorage.setItem('selectedCourse', this.selectedCourse);
      localStorage.setItem('selectedLevel', this.selectedLevel);
  
      this.filteredQuestions = this.allQuestions.filter(q =>
        q.course === this.selectedCourse && q.level === this.selectedLevel
      );
  
      this.submitted = false;
      this.score = 0;
      this.userAnswers = {};
      this.currentQuestionIndex = 0;
      this.isTimeUp = false;
      this.timeLeft = this.totalTime;
  
      // ✅ Only start timer if not Program level
      if (!this.quizStarted && this.filteredQuestions.length > 0 && this.selectedLevel !== 'Program') {
        this.quizStarted = true;
        this.startTimer();
      }
    }
  }
  

  submitQuiz() {
    this.isTimeUp = true;
    this.score = 0;
    this.filteredQuestions.forEach(q => {
      if (this.userAnswers[q.id] === q.answer) {
        this.score++;
      }
    });
    this.submitted = true;
    console.log('Final Score:', this.score);
  }

  get formattedTime(): string {
    const minutes = Math.floor(this.timeLeft / 60);
    const seconds = this.timeLeft % 60;
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  }
 
 
}
