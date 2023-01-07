import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-header',
  template: `
        <header class="bg-gray-800 text-white py-4">
  <div class="container mx-auto px-4">
    <h1 class="text-3xl font-bold tracking-tight">Angular Training</h1>
  </div>
</header>

  `
})
export class HeaderComponent {

}
