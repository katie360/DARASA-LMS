import { Component, ElementRef, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-assignment-details',
  templateUrl: './assignment-details.component.html',
  styleUrls: ['./assignment-details.component.css']
})
export class AssignmentDetailsComponent {
  @ViewChild('fileInput') fileInput: ElementRef<HTMLInputElement>;
  assignment: any;
  // get assignment id from url
  assignmentId = window.location.pathname.split('/')[3];


  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.Get('assignments/' + this.assignmentId).subscribe((res: any) => {
      this.assignment = res;
    });
  }

  downloadFile(url: string): void {
    const link = document.createElement('a');
    link.href = url;
    link.download = this.assignment.name; 
    link.target = '_blank'; // Open the file in a new tab/window

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  }

  selectedFile: File | null;

  handleFileInput(input: HTMLInputElement): void {
    const files = input.files;
    if (files && files.length > 0) {
      this.selectedFile = files[0];
    } else {
      this.selectedFile = null;
    }
  }


  uploadFile(): void {
    // Check if a file is selected
    if (!this.selectedFile) {
      console.log('No file selected');
      return;
    }

    // Create a new FormData object
    const formData = new FormData();
    formData.append('file', this.selectedFile);
    formData.append('assignment', this.assignmentId);

    // get user from local storage
    const user = localStorage.getItem('user');
    console.log(user);
    if (user !== null) {
      const data = JSON.parse(user);
      const email = data.email;

      formData.append('email', email);

      // Perform the file upload request
      this.apiService.PostFormData('student/submit-assignment/', formData).subscribe(
        (response: any) => {
          alert('Assignment submitted successfully');
          console.log('File upload successful:', response);
        },
        (error: any) => {
          console.error('File upload failed:', error);
        }
      );

      // Reset the file input field
      // this.fileInput.nativeElement.value = null;
      this.selectedFile = null;
    }
  }
}



