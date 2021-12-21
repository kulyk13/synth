// Для демонстрації роботи
feedTab.addEventListener("click", (e) => {
    feedTab.classList.add("tabs__link--active");
    exploreTab.classList.remove("tabs__link--active");
    discussTab.classList.remove("tabs__link--active");
    heroContent.innerHTML = `<section class="hero container">
    <h2 class="visually-hidden">User page</h2>
    <article class="user">
        <div class="user__header">
            <img src="img/avatar.webp" alt="Benjamin Clementine" class="user__img" width="120" height="120">
            <div class="user__desc">
                <h2 class="user__name">Benjamin Clementine</h2>
                <p class="user__nickname">@benclementine</p>
                <a href="#" class="user__edit-btn">Edit profile</a>
            </div>
            <div class="dropmenu-wrap">
                <button class="user__menu-btn" type="button" aria-label="open user menu">
                    <img src="img/dots.svg" class="user__menu-img" alt="open context menu" width="16"
                        height="16">
                </button>
                <ul class="user__menu dropmenu drop">
                    <li class="user__menu-item dropitem">
                        <a href="#" class="user__menu-link droplink">
                            <img src="img/report.svg" alt="report" width="20" height="20"
                                class="user__menu-img">
                            Report user
                        </a>
                    </li>
                    <li class="user__menu-item dropitem">
                        <a href="#" class="user__menu-link droplink">
                            <img src="img/block.svg" alt="block" width="20" height="20" class="user__menu-img">
                            Block user
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <dl class="user__stats">
            <div class="user__stats-item">
                <dt class="user__stats-title">synths</dt>
                <dd class="user__stats-value">45</dd>
            </div>
            <div class="user__stats-item">
                <dt class="user__stats-title">followers</dt>
                <dd class="user__stats-value">110</dd>
            </div>
            <div class="user__stats-item">
                <dt class="user__stats-title">following</dt>
                <dd class="user__stats-value">322</dd>
            </div>
        </dl>
        <p class="user__summary">
            Cryptocurrencies including Ethereum, Ripple, and Litecoin have all plunged between 20 to 30 percent
            each, according to CoinMarketCap. Here is the latest Ripple price news and live updates on XRP,
            bitcoin and Ethereum.
        </p>
    </article>
    <section class="main-content">
        <h2 class="visually-hidden">User posts</h2>
        <form class="switcher privacy-switcher">
            <p class="switcher__value privacy-switcher__value">Public</p>
            <label for="privacySwitcher" class="switcher__switch privacy-switcher__switch">Privacy Switcher
                <input id="privacySwitcher" type="checkbox"
                    class="switcher__checkbox privacy-switcher__checkbox">
                <span class="switcher__slider privacy-switcher__slider round"></span>
            </label>
            <p class="switcher__value privacy-switcher__value">Private</p>
        </form>
        <div id="posts" class="posts">
            <article class="post-card">
                <h2 class="visually-hidden">My post</h2>
                <p class="post-card__text">New air routes that promise cheap flights in</p>
                <div class="post-card__footer">
                    <a href="#" class="post-card__author">
                        <img src="img/account.webp" alt="Gregory Watkins" width="24" height="24"
                            class="post-card__img">
                        Gregory Watkins
                    </a>
                    <a href="#" class="post-card__share">Share</a>
                </div>
            </article>
            <article class="post-card">
                <h2 class="visually-hidden">My post</h2>
                <p class="post-card__text">New air routes that promise cheap flights in</p>
                <div class="post-card__footer">
                    <a href="#" class="post-card__author">
                        <img src="img/account.webp" alt="Gregory Watkins" width="24" height="24"
                            class="post-card__img">
                        Gregory Watkins
                    </a>
                    <a href="#" class="post-card__share">Share</a>
                </div>
            </article>
            <article class="post-card">
                <h2 class="visually-hidden">My post</h2>
                <a href="#" class="post-card__link">
                    Shared to <span class="post-card__link-hash">#discussionaboutanimgttdds…</span>
                </a>
                <p class="post-card__text">New air routes that promise cheap flights in</p>
                <div class="post-card__footer">
                    <a href="#" class="post-card__author">
                        <img src="img/account.webp" alt="Gregory Watkins" width="24" height="24"
                            class="post-card__img">
                        Gregory Watkins
                    </a>
                    <ul class="post-card__activity">
                        <li class="post-card__activity-item post-card__views">
                            <img src="img/view.svg" alt="views" class="post-card__pic" width="16" height="16">
                            <span class="views-amount">88</span>
                        </li>
                        <li class="post-card__activity-item post-card__likes">
                            <img src="img/like.svg" alt="views" class="post-card__pic" width="16" height="14">
                            <span class="likes-amount">24</span>
                        </li>
                    </ul>
                </div>
            </article>
            <article class="post-card">
                <h2 class="visually-hidden">My post</h2>
                <a href="#" class="post-card__link">
                    <img src="img/link.svg" alt="link img" width="20" height="20" class="post-card__link-img">
                    Shared via weblink
                </a>
                <p class="post-card__text">New air routes that promise cheap flights in</p>
                <div class="post-card__footer">
                    <a href="#" class="post-card__author">
                        <img src="img/account.webp" alt="Gregory Watkins" width="24" height="24"
                            class="post-card__img">
                        Gregory Watkins
                    </a>
                    <ul class="post-card__activity">
                        <li class="post-card__activity-item post-card__views">
                            <img src="img/view.svg" alt="views" class="post-card__pic" width="16" height="16">
                            <span class="views-amount">88</span>
                        </li>
                        <li class="post-card__activity-item post-card__likes">
                            <img src="img/like.svg" alt="views" class="post-card__pic" width="16" height="14">
                            <span class="likes-amount">24</span>
                        </li>
                    </ul>
                </div>
            </article>
        </div>
    </section>
  </section>`;
  });
  exploreTab.addEventListener("click", (e) => {
    exploreTab.classList.add("tabs__link--active");
    feedTab.classList.remove("tabs__link--active");
    discussTab.classList.remove("tabs__link--active");
    heroContent.innerHTML = `<section class="another-page container">
    <h2 class="another-page__title">You switched to ${e.target.textContent}</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consectetur vitae molestias repellendus voluptatem ullam veritatis, et quas reiciendis ducimus nihil, temporibus, maxime sunt corrupti? Necessitatibus id perferendis delectus, aperiam eos excepturi, commodi pariatur cupiditate eius ducimus magnam dolor! Maiores necessitatibus ducimus quibusdam ratione! Repellendus aliquam enim praesentium autem harum, alias distinctio impedit aut explicabo cum eligendi incidunt sint magni eum illum minima earum tempore laborum porro ratione? Debitis quo fugit itaque, sunt omnis dignissimos libero sequi eius fuga alias? Necessitatibus suscipit placeat deserunt beatae quasi. Cumque voluptatum, quia harum impedit excepturi, est necessitatibus vel distinctio veniam accusantium sint neque illo explicabo accusamus ea pariatur at nostrum, nesciunt cupiditate. Officiis facilis vitae doloremque delectus sit esse repellat, qui illo facere hic quaerat eaque neque voluptatem incidunt, itaque sed rerum! Autem vero, ullam esse atque unde mollitia vitae molestiae eius nostrum aliquam soluta quam dignissimos odit, consequuntur minima consequatur natus repudiandae!</p>
    </section>`;
  });
  discussTab.addEventListener("click", (e) => {
    discussTab.classList.add("tabs__link--active");
    feedTab.classList.remove("tabs__link--active");
    exploreTab.classList.remove("tabs__link--active");
    heroContent.innerHTML = `<section class="another-page container">
    <h2 class="another-page__title">You switched to ${e.target.textContent}</h2>
    <p>Vel eveniet temporibus ab iste. Magnam cupiditate fugit laudantium ab, quod repellendus quibusdam optio assumenda veniam repudiandae id saepe dicta ipsam quis corporis voluptates at soluta fuga. Aut voluptas id eum dolorem obcaecati, unde nulla, et laboriosam, sint architecto dolores. Ratione ipsam sequi veniam error animi tempore aut. Nam enim voluptas nihil ullam, nobis obcaecati blanditiis! Tempore nam enim accusantium repudiandae. Magni, dolor. Provident enim voluptas, voluptate incidunt iste debitis tempora? Impedit delectus quidem ab repudiandae? Quasi tenetur obcaecati nulla doloremque magni sit dicta cum? Magnam vero illum quibusdam excepturi eligendi suscipit qui deserunt voluptatibus, eveniet voluptates incidunt itaque autem cum ut, et architecto officia! Aliquid aliquam labore placeat consequuntur magnam blanditiis nesciunt doloremque et similique ad? Officiis expedita doloremque distinctio suscipit exercitationem aut. Ea, hic eum laboriosam dignissimos et magnam perferendis placeat, excepturi illo at doloremque qui corporis accusamus voluptatum voluptas amet dolore esse dolorem rerum consectetur maxime tempore! Modi, vero impedit.</p>
    </section>`;
  });
  addPostBtn.addEventListener("click", (ev) => {
    function getRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let post = document.createElement("article");
    post.className = "post-card";
    post.innerHTML = `<h2 class="visually-hidden">My post</h2>
    <a href="#" class="post-card__link">
        <img src="img/link.svg" alt="link img" width="20" height="20" class="post-card__link-img">
        Shared via weblink
    </a>
    <p class="post-card__text">New air routes that promise cheap flights in</p>
    <div class="post-card__footer">
        <a href="#" class="post-card__author">
            <img src="img/account.webp" alt="Gregory Watkins" width="24" height="24"
                class="post-card__img">
            Gregory Watkins
        </a>
        <ul class="post-card__activity">
            <li class="post-card__activity-item post-card__views">
                <img src="img/view.svg" alt="views" class="post-card__pic" width="16" height="16">
                <span class="views-amount">88</span>
            </li>
            <li class="post-card__activity-item post-card__likes">
                <img src="img/like.svg" alt="views" class="post-card__pic" width="16" height="14">
                <span class="likes-amount">24</span>
            </li>
        </ul>
    </div>`;
    posts.append(post);
  });
  