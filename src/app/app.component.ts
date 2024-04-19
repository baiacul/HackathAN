import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadComponent } from './components/head/head.component';
import { FooterComponent } from './components/footer/footer.component';
import { OptionsComponent } from './components/options/options.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { CommonModule } from '@angular/common';
import { BlobOptions } from 'buffer';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HeadComponent,
    FooterComponent,
    OptionsComponent,
    QuestionsComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  options:boolean= true;
  questoes:boolean= false;

  title = 'hackathan-app';

  atualizarDados(dados: string) {
    console.log('Dados recebidos do filho:', dados);
    this.options = false
    this.questoes = true
  }
}
