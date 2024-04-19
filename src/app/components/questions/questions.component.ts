import { CommonModule } from '@angular/common';
import { Component, input, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { DadoService } from '../../services/dado.service';
import { Dado } from '../../class/dado';
import { ArquivoService } from '../../services/arquivo.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.css'
})
export class QuestionsComponent implements AfterViewInit {
  constructor(
    private dadoservice: DadoService,
    private arquivoService: ArquivoService
  ){} 
  dados: Dado = {
    titulo: '',
    ano: '',
    contexto: '',
    pontoAcesso: '',
    social: '',
    address: '',
    tipo: ""
  };
  questaoAtual: number = 0;
  categoriaSelecionada:string='iconográfico';
  imgUrl:string ='';

  informacoesForm = new FormGroup({
    titulo: new FormControl(''),
    data1: new FormControl(),
    data2: new FormControl(),
    indexar: new FormControl(),
  });

  ngAfterViewInit(): void {
    if (typeof document !== 'undefined') {
      const input = document.getElementById('placeholder-button') as HTMLInputElement;
      if (input.value === '') {
        this.restaurarPlaceholder();
      }
    }
    this.get()
  }
  tipoDocumento: string = 'Cartografico'
  proximo() {
    this.questaoAtual++;
  }
  anterior() {
    this.questaoAtual--;
  }
  salvarForm() {
    console.warn(this.informacoesForm.value);
  }

  removerPlaceholder() {
    const input = document.getElementById('placeholder-button') as HTMLInputElement;
    input.removeAttribute('placeholder');
    input.style.background = "#4682B4"

  }
  restaurarPlaceholder() {
    const input = document.getElementById('placeholder-button') as HTMLInputElement;
    if (!input.value) {
      input.setAttribute('placeholder', 'Digite o título aqui...');
    }
  }
  enviar() {
    let ano = '';
    const ano1 = this.informacoesForm.get('ano1') ? this.informacoesForm.get('ano1')!.value : '';
    const ano2 = this.informacoesForm.get('ano2') ? this.informacoesForm.get('ano2')!.value : '';
  
    if (ano1 === ano2) {
      ano = ano1;
    } else {
      ano = ano1 + '-' + ano2;
    }
    const data = {
      titulo: this.informacoesForm.get('titulo') ? this.informacoesForm.get('titulo')!.value : '',
      ano: ano,
      contexto: this.informacoesForm.get('contexto') ? this.informacoesForm.get('contexto')!.value : '',
      pontoAcesso: this.informacoesForm.get('indexar') ? this.informacoesForm.get('indexar')!.value : '',
      social: 'alguma coisa',
      address: 'https://drive.google.com/file/d/1eUIU1eE-CiKCwcZTiRwtq5H28Cl3QbF6/view?usp=drive_link',
      tipo: "Iconográfico"
    }
    this.dadoservice.criarDado(data).subscribe({

    next: (res) => {
          console.log('Documento criado com sucesso:', res);
        },
        error: (e) => {
          console.log('Erro ao criar documento:', e);
        }
      });
  }
  get(){
    this.arquivoService.get(this.categoriaSelecionada).subscribe({

      next: (res) => {
        console.log('Documento criado com sucesso:', res);
        if (res && res.arquivo && res.arquivo.address) {
          // Obtém o address da resposta e atribui à variável imgUrl
          this.imgUrl = res.arquivo.address;
          console.log('URL da imagem:', this.imgUrl);
      } else {
          console.log('Não foi possível obter o address na resposta.');
      }
  },
  error: (e) => {
      console.log('Erro ao criar documento:', e);
  }
          
        });
    }
      
  
  }
  



