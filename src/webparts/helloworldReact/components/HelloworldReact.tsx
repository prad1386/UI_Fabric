import * as React from 'react';
import styles from './HelloworldReact.module.scss';
import { IHelloworldReactProps } from './IHelloworldReactProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Button, ButtonType, Nav, Panel, PanelType } from 'office-ui-fabric-react';
// import { ColorPicker } from 'office-ui-fabric-react/lib/ColorPicker';
// import { Carousel } from 'react-responsive-carousel';
import ImageGallery from 'react-image-gallery';
import './style.css';
// import './img-rotator.css';
import './image-gallery.css';
const PREFIX_URL = 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/';
export default class HelloworldReact extends React.Component<IHelloworldReactProps, any> {
    constructor() {
        super();
        this.state = {
            showFullscreenButton: true,
            showGalleryFullscreenButton: true,
            showPlayButton: true,
            showGalleryPlayButton: true,
            slideInterval: 2000,
            showVideo: {},
        };

    }


    _onImageLoad(event) {
        console.debug('loaded image', event.target.src);
    }

    _onSlide(index) {
        this._resetVideo();
        console.debug('slid to index', index);
    }

    _onPause(index) {
        console.debug('paused on index', index);
    }

    _onScreenChange(fullScreenElement) {
        console.debug('isFullScreen?', !!fullScreenElement);
    }

    _onPlay(index) {
        console.debug('playing from index', index);
    }

    _handleInputChange(state, event) {
        this.setState({ [state]: event.target.value });
    }

    _handleCheckboxChange(state, event) {
        this.setState({ [state]: event.target.checked });
    }

    _handleThumbnailPositionChange(event) {
        this.setState({ thumbnailPosition: event.target.value });
    }

    _getStaticImages() {
        let images = [];
        for (let i = 2; i < 12; i++) {
            images.push({
                original: `${PREFIX_URL}${i}.jpg`,
                thumbnail: `${PREFIX_URL}${i}t.jpg`
            });
        }

        return images;
    }

    _resetVideo() {
        this.setState({ showVideo: {} });

        if (this.state.showPlayButton) {
            this.setState({ showGalleryPlayButton: true });
        }

        if (this.state.showFullscreenButton) {
            this.setState({ showGalleryFullscreenButton: true });
        }
    }

    _toggleShowVideo(url) {
        this.state.showVideo[url] = !Boolean(this.state.showVideo[url]);
        this.setState({
            showVideo: this.state.showVideo
        });

        if (this.state.showVideo[url]) {
            if (this.state.showPlayButton) {
                this.setState({ showGalleryPlayButton: false });
            }

            if (this.state.showFullscreenButton) {
                this.setState({ showGalleryFullscreenButton: false });
            }
        }
    }

    _renderVideo(item) {
        return (
            <div className='image-gallery-image'>
                {
                    this.state.showVideo[item.embedUrl] ?
                        <div className='video-wrapper'>
                            <a
                                className='close-video'
                                onClick={this._toggleShowVideo.bind(this, item.embedUrl)}
                            >
                            </a>
                            <iframe
                                width='100%'
                                height='315'
                                src={item.embedUrl}
                                frameBorder='0'
                                allowFullScreen
                            >
                            </iframe>
                        </div>
                        :
                        <a onClick={this._toggleShowVideo.bind(this, item.embedUrl)}>
                            <div className='play-button'></div>
                            <img src={item.original} />
                            {
                                item.description &&
                                <span
                                    className='image-gallery-description'
                                    style={{ right: '0', left: 'initial' }}
                                >
                                    {item.description}
                                </span>
                            }
                        </a>
                }
            </div>
        );
    }
    public render(): JSX.Element {

        const images = [
            {
                original: 'http://lorempixel.com/output/cats-q-c-640-480-1.jpg',
                thumbnail: 'http://lorempixel.com/output/cats-q-c-640-480-1.jpg',
                thumbnailLabel: 'How we are making day one a priceless experience',
            },
            {
                original: 'http://lorempixel.com/output/cats-q-c-640-480-2.jpg',
                thumbnail: 'http://lorempixel.com/output/cats-q-c-640-480-2.jpg',
                thumbnailLabel: 'Lorem Ipsum is simply dummy text of the',
            },
            {
                original: 'http://lorempixel.com/output/cats-q-c-640-480-3.jpg',
                thumbnail: 'http://lorempixel.com/output/cats-q-c-640-480-3.jpg',
                thumbnailLabel: 'mastercard sponsors TEDxAthens2017',
            },
            {
                original: 'http://lorempixel.com/output/cats-q-c-640-480-4.jpg',
                thumbnail: 'http://lorempixel.com/output/cats-q-c-640-480-4.jpg',
                thumbnailLabel: 'Asia, middle east dominate global destination cities index',
            },
            {
                original: 'http://lorempixel.com/output/cats-q-c-640-480-3.jpg',
                thumbnail: 'http://lorempixel.com/output/cats-q-c-640-480-3.jpg',
                thumbnailLabel: 'mastercard sponsors TEDxAthens2017',
            },
            {
                original: 'http://lorempixel.com/output/cats-q-c-640-480-4.jpg',
                thumbnail: 'http://lorempixel.com/output/cats-q-c-640-480-4.jpg',
                thumbnailLabel: 'Asia, middle east dominate global destination cities index',
            },
            {
                original: 'http://lorempixel.com/output/cats-q-c-640-480-3.jpg',
                thumbnail: 'http://lorempixel.com/output/cats-q-c-640-480-3.jpg',
                thumbnailLabel: 'mastercard sponsors TEDxAthens2017',
            },
            {
                original: 'http://lorempixel.com/output/cats-q-c-640-480-4.jpg',
                thumbnail: 'http://lorempixel.com/output/cats-q-c-640-480-4.jpg',
                thumbnailLabel: 'Asia, middle east dominate global destination cities index',
            },
            {
                original: 'http://lorempixel.com/output/cats-q-c-640-480-3.jpg',
                thumbnail: 'http://lorempixel.com/output/cats-q-c-640-480-3.jpg',
                thumbnailLabel: 'mastercard sponsors TEDxAthens2017',
            },
            {
                original: 'http://lorempixel.com/output/cats-q-c-640-480-4.jpg',
                thumbnail: 'http://lorempixel.com/output/cats-q-c-640-480-4.jpg',
                thumbnailLabel: 'Asia, middle east dominate global destination cities index',
            }
        ]
        const images1 = [
            {
                original: 'http://lorempixel.com/output/nightlife-q-c-640-480-5.jpg',
                thumbnail: 'http://lorempixel.com/output/nightlife-q-c-640-480-5.jpg',
                description: 'Asia, middle east dominate global destination cities index'
            },
            {
                original: 'http://lorempixel.com/output/nightlife-q-c-640-480-3.jpg',
                thumbnail: 'http://lorempixel.com/output/nightlife-q-c-640-480-3.jpg',
                description: 'Asia, middle east dominate global destination cities index '
            },
            {
                original: 'http://lorempixel.com/output/nightlife-q-c-640-480-5.jpg',
                thumbnail: 'http://lorempixel.com/output/nightlife-q-c-640-480-5.jpg',
                description: 'Asia, middle east dominate global destination cities index'
            }
        ]

        const videos = [
            {
                thumbnail: `${PREFIX_URL}3v.jpg`,
                original: `${PREFIX_URL}3v.jpg`,
                originalClass: 'featured-slide',
                thumbnailClass: 'featured-thumb',
                embedUrl: 'https://www.youtube.com/embed/iNJdPyoqt8U?autoplay=1&showinfo=0',
                description: 'Render custom slides within the gallery',
                renderItem: this._renderVideo.bind(this)
            },
            {
                thumbnail: `${PREFIX_URL}4v.jpg`,
                original: `${PREFIX_URL}4v.jpg`,
                embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
                renderItem: this._renderVideo.bind(this)
            },
            {
                thumbnail: `${PREFIX_URL}3v.jpg`,
                original: `${PREFIX_URL}3v.jpg`,
                embedUrl: 'https://www.youtube.com/embed/iNJdPyoqt8U?autoplay=1&showinfo=0',
                description: 'Render custom slides within the gallery',
                renderItem: this._renderVideo.bind(this)
            }
        ]
        return (
            <div>
                <div className="ms-Grid">
                    <div className="ms-Grid-row">
                        <ul className="navMenu">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">News</a></li>
                            <li><a href="#">About Mastercard</a></li>
                            <li style={{ float: "right" }}><a href="#">Purchase, NY</a></li>
                            <li style={{ float: "right" }}><a href="#">|</a></li>
                            <li style={{ float: "right" }}><a href="#">MA (NYSE):  142.09 +0.75 (.44%)</a></li>
                        </ul>

                        <div className="ms-Grid-col ms-u-sm12 ms-u-md12 ms-u-lg12">
                            <div className="topcarousel-leftnav">
                                <h3>Top Slider Webpart</h3>
                                <ImageGallery
                                    items={images}
                                    slideInterval={2000}
                                    autoPlay={false}
                                    showPlayButton={false}
                                    showFullscreenButton={false}
                                    thumbnailPosition="right" />
                            </div>

                            <div className="ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6">
                                <h3>Scenes around Mastercard</h3>
                                <ImageGallery
                                    items={images1}
                                    slideInterval={2000}
                                    autoPlay={true}
                                    showPlayButton={false}
                                    showFullscreenButton={false} />
                            </div>

                            <div className="ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6">
                                <h3>Video Component</h3>
                                <ImageGallery
                                    items={videos}
                                    slideInterval={2000}
                                    autoPlay={false}
                                    showGalleryPlayButton={true}
                                    onSlide={this._onSlide.bind(this)}
                                    onPause={this._onPause.bind(this)}
                                    onScreenChange={this._onScreenChange.bind(this)}
                                    onPlay={this._onPlay.bind(this)}
                                    showFullscreenButton={false} />
                            </div>
                            <h3>Global and Local Billboard</h3>
                            <ImageGallery
                                items={images1}
                                slideInterval={2000}
                                autoPlay={true}
                                showPlayButton={false}
                                showThumbnails={false}
                                showFullscreenButton={false} />
                        </div>

                    </div>

                    <div className="ms-Grid-row">
                        <div className="ms-Grid-col ms-u-sm12 ms-u-md12 ms-u-lg12">
                            <div className="ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6">
                                <h3>My News</h3>
                                <ul className="list-WP-img">
                                    <li>
                                        <img src="http://lorempixel.com/output/nightlife-q-c-640-480-5.jpg" />
                                        <p>lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem</p>
                                    </li>
                                    <li>
                                        <img src="http://lorempixel.com/output/nightlife-q-c-640-480-4.jpg" />
                                        <p>lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum</p>
                                    </li>
                                    <li>
                                        <img src="http://lorempixel.com/output/nightlife-q-c-640-480-3.jpg" />
                                        <p>lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6">
                                <h3>Global Buzz</h3>
                                <ul className="list-WP-img">
                                    <li>
                                        <img src="http://lorempixel.com/output/nightlife-q-c-640-480-6.jpg" />
                                        <p>lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem </p>
                                    </li>
                                    <li>
                                        <img src="http://lorempixel.com/output/nightlife-q-c-640-480-1.jpg" />
                                        <p>lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum</p>
                                    </li>
                                    <li>
                                        <img src="http://lorempixel.com/output/nightlife-q-c-640-480-2.jpg" />
                                        <p>lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                
                    <div className="ms-Grid-row">
                        <div className="ms-Grid-col ms-u-sm12 ms-u-md12 ms-u-lg12">
                            <div className="ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6">
                                <h3>Learning Center</h3>
                                <ul className="list-WP-img list-WP-noicon">
                                    <li>
                                        <p>lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem</p>
                                    </li>
                                    <li>
                                        <p>lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum</p>
                                    </li>
                                    <li>
                                        <p>lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6">
                                <h3>Trending Around Me</h3>
                                <ul className="list-WP-img list-WP-icon">
                                    <li>
                                        <img src="http://lorempixel.com/output/nightlife-q-c-640-480-6.jpg" />
                                        <p>lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem </p>
                                    </li>
                                    <li>
                                        <img src="http://lorempixel.com/output/nightlife-q-c-640-480-1.jpg" />
                                        <p>lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum</p>
                                    </li>
                                    <li>
                                        <img src="http://lorempixel.com/output/nightlife-q-c-640-480-2.jpg" />
                                        <p>lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        );
    }
}
