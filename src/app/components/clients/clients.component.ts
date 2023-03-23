import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CLIENTS,
  EX_CLIENTS_LIST,
  FEATURED_CLIENTS_LIST
} from 'src/app/constants/clients.constants';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientsComponent {
  public readonly EX_CLIENTS_LIST = EX_CLIENTS_LIST;
  public readonly FEATURED_CLIENTS_LIST = FEATURED_CLIENTS_LIST;
  public readonly CLIENTS = CLIENTS;
}
