import { Component,Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-options',
  standalone: true,
  imports: [],
  templateUrl: './options.component.html',
  styleUrl: './options.component.css'
})
export class OptionsComponent {
  @Output() dadosAtualizados = new EventEmitter<string>();
entrar(){
  const dados = 'Dados do filho';
    this.dadosAtualizados.emit(dados);
}
}
