import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MiPrimerComponenteComponent } from './mi-primer-componente/mi-primer-componente.component';
import { OtroComponenteComponent } from './otro-componente/otro-componente.component';
import { ComponenteCardComponent } from './componente-card/componente-card.component';
import { CmpDataBindingComponent } from './cmp-data-binding/cmp-data-binding.component';
import { ContadorComponent } from './cmp-data-binding/contador/contador.component';
import { CmpComunicacionEntreCmpsComponent } from './cmp-comunicacion-entre-cmps/cmp-comunicacion-entre-cmps.component';
import { CmpLeiaComponent } from './cmp-comunicacion-entre-cmps/cmp-leia/cmp-leia.component';
import { CmpLukeComponent } from './cmp-comunicacion-entre-cmps/cmp-luke/cmp-luke.component';
import { MiCvComponent } from './mi-cv/mi-cv.component';
import { FromCvComponent } from './mi-cv/from-cv/from-cv.component';
import { PreviewCvComponent } from './mi-cv/preview-cv/preview-cv.component';
import { CmpDirectivasComponent } from './cmp-directivas/cmp-directivas.component';
import { MarcarDirective } from './cmp-directivas/marcar.directive';
import { BlinkDirective } from './cmp-directivas/blink.directive';
import { CmpServiciosComponent } from './cmp-servicios/cmp-servicios.component';
import { CmpAComponent } from './cmp-servicios/cmp-a/cmp-a.component';
import { CmpBComponent } from './cmp-servicios/cmp-b/cmp-b.component';
import { CmpGeneradorComponent } from './cmp-generador/cmp-generador.component';
import { CmpFormComponent } from './cmp-generador/cmp-form/cmp-form.component';
import { CmpMemeComponent } from './cmp-generador/cmp-meme/cmp-meme.component';
import { CmpListamemeComponent } from './cmp-generador/cmp-listameme/cmp-listameme.component';
import { CmpFormulariosComponent } from './cmp-formularios/cmp-formularios.component';
import { CmpRoutingComponent } from './cmp-routing/cmp-routing.component';
import { InicioComponent } from './cmp-routing/inicio/inicio.component';
import { NuevoUsuarioComponent } from './cmp-routing/nuevo-usuario/nuevo-usuario.component';
import { ErrorComponent } from './cmp-routing/error/error.component';
import { UsuariosComponent } from './cmp-routing/usuarios/usuarios.component';
import { InfoUsuarioComponent } from './cmp-routing/usuarios/info-usuario/info-usuario.component';
import { EditarUsuarioComponent } from './cmp-routing/usuarios/editar-usuario/editar-usuario.component';
import { Routing } from './cmp-generador/app.routes';
import { CmpHttpComponent } from './cmp-http/cmp-http.component';
import { ObservablesComponent } from './cmp-http/observables/observables.component';
import { CardJobComponent } from './cmp-http/card-job/card-job.component';
import { JobListComponent } from './cmp-http/job-list/job-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MiPrimerComponenteComponent,
    OtroComponenteComponent,
    ComponenteCardComponent,
    CmpDataBindingComponent,
    ContadorComponent,
    CmpComunicacionEntreCmpsComponent,
    CmpLeiaComponent,
    CmpLukeComponent,
    MiCvComponent,
    FromCvComponent,
    PreviewCvComponent,
    CmpDirectivasComponent,

    MarcarDirective,

    BlinkDirective,

    CmpServiciosComponent,

    CmpAComponent,

    CmpBComponent,

    CmpGeneradorComponent,

    CmpFormComponent,

    CmpMemeComponent,

    CmpListamemeComponent,

    CmpFormulariosComponent,

    CmpRoutingComponent,

    InicioComponent,

    NuevoUsuarioComponent,

    ErrorComponent,

    UsuariosComponent,

    InfoUsuarioComponent,

    EditarUsuarioComponent,

    CmpHttpComponent,

    ObservablesComponent,

    CardJobComponent,

    JobListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    Routing,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
