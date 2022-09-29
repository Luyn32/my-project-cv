const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const cd = $(".cd");

const player = $(".player");
const heading = $("header h2");
const cdThumb = $(".cd-thumb");
const audio = $("#audio");
const playBtn = $(".btn-toggle-play");
const progress = $("#progress");

const app = {
    currentIndex: 0,
    isPlaying: false,
    songs: [
        {
            name: "Quá khứ đôi hiện tại đơn",
            singer: "Raftaar x Fortnite",
            path: "/javascript/assets/audio/QUÁ KHỨ ĐÔI, HIỆN TẠI ĐƠN - ĐỨC PHÚC - OFFICIAL MUSIC VIDEO.mp3",
            image: "data:image/jpeg;base64,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",
        },
        {
            name: "Tu Phir Se Aana",
            singer: "Raftaar x Salim Merchant x Karma",
            path: "https://mp3.vlcmusic.com/download.php?track_id=34213&format=320",
            image: "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg",
        },
        {
            name: "Naachne Ka Shaunq",
            singer: "Raftaar x Brobha V",
            path: "https://mp3.filmysongs.in/download.php?id=Naachne Ka Shaunq Raftaar Ft Brodha V Mp3 Hindi Song Filmysongs.co.mp3",
            image: "https://i.ytimg.com/vi/QvswgfLDuPg/maxresdefault.jpg",
        },
        {
            name: "Mantoiyat",
            singer: "Raftaar x Nawazuddin Siddiqui",
            path: "https://mp3.vlcmusic.com/download.php?track_id=14448&format=320",
            image: "https://a10.gaanacdn.com/images/song/39/24225939/crop_480x480_1536749130.jpg",
        },
        {
            name: "Aage Chal",
            singer: "Raftaar",
            path: "https://mp3.vlcmusic.com/download.php?track_id=25791&format=320",
            image: "https://a10.gaanacdn.com/images/albums/72/3019572/crop_480x480_3019572.jpg",
        },
        {
            name: "Damn",
            singer: "Raftaar x kr$na",
            path: "https://mp3.filmisongs.com/go.php?id=Damn%20Song%20Raftaar%20Ft%20KrSNa.mp3",
            image: "https://filmisongs.xyz/wp-content/uploads/2020/07/Damn-Song-Raftaar-KrNa.jpg",
        },
        {
            name: "Feeling You",
            singer: "Raftaar x Harjas",
            path: "https://mp3.vlcmusic.com/download.php?track_id=27145&format=320",
            image: "https://a10.gaanacdn.com/gn_img/albums/YoEWlabzXB/oEWlj5gYKz/size_xxl_1586752323.webp",
        },
    ],
    render: function () {
        const htmls = this.songs.map((song) => {
            return `
                <div class="song">
                    <div
                        class="thumb"
                        style="
                            background-image: url(${song.image});
                        "
                    ></div>
                    <div class="body">
                        <h3 class="title">${song.name}</h3>
                        <p class="author">${song.singer}</p>
                    </div>
                    <div class="option">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>
            `;
        });
        $(".playlist").innerHTML = htmls.join("");
    },
    defineProperties: function () {
        Object.defineProperty(this, "currentSong", {
            get: function () {
                return this.songs[this.currentIndex];
            },
        });
    },
    hanldeEvents: function () {
        const _this = this;
        const cdWidth = cd.offsetWidth;
        //xu ly phong to thu nho
        document.onscroll = function () {
            const scrollTop =
                window.scrollY || document.documentElement.scrollTop;
            const newCdWidth = cdWidth - scrollTop;
            cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
            cd.style.opacity = newCdWidth / cdWidth;
        };
        // xu ly khi click play
        playBtn.onclick = function () {
            if (_this.isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
        };

        // khi bai hat duoc play
        audio.onplay = function () {
            _this.isPlaying = true;
            player.classList.add("playing");
        };
        // khi bai hat bij pause
        audio.onpause = function () {
            _this.isPlaying = false;
            player.classList.remove("playing");
        };
        // khi tien do bai hat thay doi
        audio.ontimeupdate = function () {
            if (audio.duration) {
                const progressPercent = Math.floor(
                    (audio.currentTime / audio.duration) * 100
                );
                progress.value = progressPercent;
            }
        };
        //xu ly khi tua bai hat
        progress.onchange = function (e) {
            const seekTime = (e.target.value / 100) * audio.duration;
            audio.currentTime = seekTime;
        };
    },
    loadCurrentSong: function () {
        heading.textContent = this.currentSong.name;
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
        audio.src = this.currentSong.path;
    },
    start: function () {
        // dinh nghia cac thuoc tinh cho object
        this.defineProperties();
        //lang nghe xu ly cac su kien
        this.hanldeEvents();
        //tai thong tin bai hat dau tien vao ui
        this.loadCurrentSong();
        //render lai playlist
        this.render();
    },
};
app.start();
