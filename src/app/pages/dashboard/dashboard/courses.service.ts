import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CoursesService {
    private courses = JSON.parse(localStorage.getItem('courses') || '[]');
    private coursesSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

    addCourse(course: any): void {
        this.courses.push(course);
        this.coursesSubject.next(this.courses);
        localStorage.setItem('courses', JSON.stringify(this.courses));
    }

    removeCourse(index: number): void {
        // Remove the course from the local storage
        // let courses = JSON.parse(localStorage.getItem('courses') || '[]');
        // courses = courses.filter((c: any) => c.id !== course.id);
        // this.coursesSubject.next(courses);
        // // localStorage.setItem('courses', JSON.stringify(courses));
        this.courses.splice(index, 1);
        this.coursesSubject.next(this.courses);
        localStorage.setItem('courses', JSON.stringify(this.courses));
    }

    getCourses(): Observable<any[]> {
        return this.coursesSubject.asObservable();
    }
}
