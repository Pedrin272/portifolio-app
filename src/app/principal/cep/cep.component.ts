import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CepService } from './cep.service';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.scss'],
})
export class CepComponent implements OnInit, AfterViewInit {
  cadastroForm: any;

  hasUnitNumber = false;

  states = [
    {
      abbreviation: 'AC',
      name: 'Acre',
    },
    {
      abbreviation: 'AL',
      name: 'Alagoas',
    },
    {
      abbreviation: 'AM',
      name: 'Amazonas',
    },
    {
      abbreviation: 'AP',
      name: 'Amapá',
    },
    {
      abbreviation: 'BA',
      name: 'Bahia',
    },
    {
      abbreviation: 'CE',
      name: 'Ceará',
    },
    {
      abbreviation: 'DF',
      name: 'Distrito Federal',
    },
    {
      abbreviation: 'ES',
      name: 'Espírito Santo',
    },
    {
      abbreviation: 'GO',
      name: 'Goiás',
    },
    {
      abbreviation: 'MA',
      name: 'Maranhão',
    },
    {
      abbreviation: 'MG',
      name: 'Minas Gerais',
    },
    {
      abbreviation: 'MS',
      name: 'Mato Grosso do Sul',
    },
    {
      abbreviation: 'MT',
      name: 'Mato Grosso',
    },
    {
      abbreviation: 'PA',
      name: 'Pará',
    },
    {
      abbreviation: 'PB',
      name: 'Paraíba',
    },
    {
      abbreviation: 'PE',
      name: 'Pernambuco',
    },
    {
      abbreviation: 'PI',
      name: 'Piauí',
    },
    {
      abbreviation: 'PR',
      name: 'Paraná',
    },
    {
      abbreviation: 'RJ',
      name: 'Rio de Janeiro',
    },
    {
      abbreviation: 'RN',
      name: 'Rio Grande do Norte',
    },
    {
      abbreviation: 'RO',
      name: 'Rondônia',
    },
    {
      abbreviation: 'RR',
      name: 'Roraima',
    },
    {
      abbreviation: 'RS',
      name: 'Rio Grande do Sul',
    },
    {
      abbreviation: 'SC',
      name: 'Santa Catarina',
    },
    {
      abbreviation: 'SE',
      name: 'Sergipe',
    },
    {
      abbreviation: 'SP',
      name: 'São Paulo',
    },
    {
      abbreviation: 'TO',
      name: 'Tocantins',
    },
  ];

  constructor(private fb: FormBuilder, private cepService: CepService) {}
  ngOnInit(): void {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      endereco: ['', Validators.required],
      endereco2: '',
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
      cep: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(5),
        ]),
      ],
      logradouro: ['', Validators.required],
      bairro: ['', Validators.required],
      complemento: '',
    });
  }

  ngAfterViewInit(): void {
    this.cadastroForm.get('cep').valueChanges.subscribe((cep: any) => {
      if (cep != null && cep !== '') {
        // this.cepService.consultaCEP(cep).subscribe((dados) => this.populaDadosForm(dados));
        console.log(cep);
      }
    });
  }

  buscarCep(cep: string) {}
  cadastrar() {
    console.log(this.cadastroForm.value);
  }

  onSubmit(): void {
    alert('Thanks!');
  }
}
