import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Container, Icon, Segment, Label, Grid, Input, Form, Divider, Flag, Image, Header } from 'semantic-ui-react';

class App extends Component {
  render(){
    return (
      <div>
        <Segment>
          <Grid columns={3} >
            <Grid.Column width={3}>
              <Flag name='indonesia' />
              <Label>
                <Icon name='angle left' /> 
              </Label>
              <Label>
                <Icon name='angle right' />
              </Label>
            </Grid.Column>

            <Grid.Column width={9}>
              <Input fluid icon='star' placeholder='Search...' />
            </Grid.Column>

            <Grid.Column width={2} textAlign='right'>
              <Header as='h2'>
                <Image size='small' circular src='https://banner2.kisspng.com/20180420/kuq/kisspng-computer-icons-user-clip-art-my-vector-5ad9a348cd2ce1.8035052415242125528404.jpg' /> Patrick
              </Header>
            </Grid.Column>
          </Grid>
          <Divider horizontal></Divider>          
        </Segment>
        <Container textAlign="center">
          <h4>SELAMAT DATANG !!!!</h4>
          <br />
          <p>
          Sudah enam tim atau negara yang memastikan lolos ke babak 16 Besar Piala Eropa atau EURO 2020 hingga Selasa (22/6/2021) dini hari.
          Dua negara terbaru yang masih daftar tim lolos ke babak gugur 16 Besar EURO 2020, yakni Belgia dan Denmark dari Grup B. Keduanya menyusul Italia, Belanda, Wales dan Austria yang sudah lebih dulu meraih tiket 16 Besar.
          Belgia lolos ke babak 16 besar EURO 2020 dengan catatan sempurna. Mereka tampil superior di Grup B dengan menyapu bersih tiga kemenangan babak penyisihan grup.
          Artikel ini telah tayang di Surya.co.id dengan judul Daftar Negara Lolos Babak 16 Besar EURO 2020, Belgia Sempurna dan Denmark Lolos Dramatis, https://surabaya.tribunnews.com/2021/06/22/daftar-negara-lolos-babak-16-besar-euro-2020-belgia-sempurna-dan-denmark-lolos-dramatis.

          </p>
          <Button icon labelPosition='left' color='teal'>
            <Icon name='plus' />
            Tambah Tautan Ke List
          </Button>
        </Container>
      </div>
    );
  }
}

export default App;
