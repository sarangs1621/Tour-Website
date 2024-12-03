import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  activeTab: string = 'users';

  users: any[] = [];
  tours: any[] = [];
  queries: any[] = [];

  // Table columns
  displayedColumnsUsers: string[] = ['name', 'email', 'role', 'delete'];
  displayedColumnsTours: string[] = [
    'name',
    'email',
    'arrival_date',
    'departure_date',
    'head_count',
    'social_media_link',
    'contact_no',
    'package_name',
  ];
  displayedColumnsQueries: string[] = [
    'firstName',
    'lastName',
    'email',
    'message',
    'whatsappNo',
    'touristNo',
    'createdAt',
  ];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchUsers();
    this.fetchTours();
    this.fetchQueries();
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  fetchUsers(): void {
    this.http.get<any[]>('http://localhost:3000/api/users').subscribe(
      (data) => (this.users = data),
      (error) => console.error('Error fetching users:', error)
    );
  }

  fetchTours(): void {
    this.http.get<any[]>('http://localhost:3000/api/tours').subscribe(
      (data) => (this.tours = data),
      (error) => console.error('Error fetching tours:', error)
    );
  }

  fetchQueries(): void {
    this.http.get<any[]>('http://localhost:3000/api/queries').subscribe(
      (data) => (this.queries = data),
      (error) => console.error('Error fetching queries:', error)
    );
  }
  deleteUser(userId: string): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.http.delete(`http://localhost:3000/api/users/${userId}`).subscribe(
        () => {
          // Remove user from the list after successful deletion
          this.users = this.users.filter((user) => user.id !== userId);
          alert('User deleted successfully');
        },
        (error) => {
          console.error('Error deleting user:', error);
          alert('Failed to delete user');
        }
      );
    }
  }
}
