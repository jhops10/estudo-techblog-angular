import { Injectable } from '@angular/core';
import { Notice } from '../models/notice.model';

@Injectable({
  providedIn: 'root',
})
export class NoticeServiceService {
  constructor() {}

  getNotices(): Notice[] {
    return [
      {
        id: 1,
        title: 'O que é linguagem de programação? Conheça as principais',
        content:
          'Uma das mais populares vertentes da tecnologia da informação, a área de programação segue tendo muita demanda de trabalho justamente pela velocidade com que dispositivos tecnológicos vêm avançando.',
      },
      {
        id: 2,
        title: 'GitHub agora permite fazer login sem precisar de senha',
        content:
          'O GitHub anunciou nesta quarta-feira (12) o acesso a partir das passkeys, método de autenticação sem senhas. A novidade está disponível em uma versão beta pública e pode substituir a autenticação em dois fatores.',
      },
      {
        id: 3,
        title: 'Por que os hiperlinks são azuis em sua maioria?',
        content:
          'Quem navega na internet, certamente já percebeu que ela conta com diversos recursos para tornar a nossa vida mais fácil. Entre essas opções podemos mencionar os hiperlinks – uma palavra ou termo clicável que direciona o leitor.',
      },
    ];
  }
}
