import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = { isModalOpen: false };

  openModal = () => this.setState({ isModalOpen: true });
  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { imagesUrl } = this.props;
    return (
      <li>
        <img
          onClick={this.openModal}
          src={imagesUrl}
          alt={'описание'}
          width="240"
        />
      </li>
    );
  }
}
