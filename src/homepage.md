<div class="kss-jumbo">
  <div class="alert alert--info">
    <div>
      <img class="kss-doc-title" src="./kss-assets/phx.logo.svg" />
    </div>
    <p>
      Grundlegende Designwerte & -elemente der <a target="_blank" href="https://www.phoenixreisen.com">
      Phoenix Reisen GmbH</a> in Bonn<br />
      <small>(mehr oder weniger automatisch generiert)</small>
    </p>
    <p>
      <a target="_blank" href="https://www.phoenixreisen.com">www.phoenixreisen.com</a>
    </p>
  </div>
</div>

<h2>Prinzipien</h2>

<p>Neue & bestehende Frontends werden inhouse auf Basis folgender Prinzipien entwickelt.</p>
<ul>
  <li>mobile first</li>
  <li><a href="#osw">Open Source Welcome</a></li>
  <li>
    <a href="./kss-assets/weniger-ist-mehr.png" title="Weniger ist mehr" target="_blank">
      weniger ist mehr, außer es ist zu wenig
    </a>
  </li>
  <li>wie sieht das in Türkis aus?</li>
</ul>

<hr />

<h2>Hitlist</h2>

<p>
  Unter anderem in folgenden Anwendungen steckt das Design-System & seine diversen Komponenten.
</p>
<ul>
  <li><a href="https://meinereise.phoenixreisen.com">Mein Phoenix</a></li>
  <li><a href="https://meinereise.phoenixreisen.com/cdn/phoenix-katalog/#!/fluss20">Katalog-Bestellung</a></li>
  <li><a href="https://design-system.phoenixreisen.net">Phoenix Design System</a></li>
  <li>Schiff-Mailer - Intranet-Applikation für Gäste an Bord zum versenden von Emails auf hoher See</li>
</ul>

<hr id="osw" />

<h2>Open Source to the rescue!</h2>

<p>Folgende designprägende 3rd party Styles werden im Design-System via SCSS importiert, erleichtern das Leben und verkürzen die Entwicklungszeit.

<ul>
  <li><a href="https://warpspire.com/kss/" target="_blank">KSS Knyle Style Sheets</a> - CSS Dokumentationsgenerator für in der Haube</li>
  <li><a href="https://tachyons.io/docs/" target="_blank">Tachyons</a> - funktionales CSS Framework für unter der Haube</li>
  <li><a href="https://daneden.github.io/animate.css/" target="_blank">Animate.css</a> - Animationssammlung für auf der Haube</li>
  <li><a href="https://fortawesome.com/sets/font-awesome-4" target="_blank">Fort Awesome</a> - hippe Icon Schriftart</li>
  <li><a href="https://pikaday.com/" target="_blank">Pikaday</a> - übersichtlicher Datepicker für Eingabefelder</li>
  <li><a href="https://idangero.us/swiper/" target="_blank">Swiper</a> - fancy touch Slider<li>
</ul>

<p>Selbstentwickelte Komponenten werden natürlich auch - so gut es geht - wiederverwendet.</p>

<ul>
  <li><a href="https://bitbucket.org/phoenixreisen/header" target="_blank">Phoenix Header</a></li>
  <li>Phoenix Footer (kommt)</li>
  <li><a href="https://github.com/phoenixreisen/tabs" target="_blank">Phoenix Web Tabs</a></li>
  <li>Phoenix Select Box (kommt)</li>
</ul>

<hr />

<h2>Typografie</h2>

<p>
  Grundschriftart ist <code>Titillium Web</code> <small><a href="https://fonts.google.com/specimen/Titillium+Web" target="_blank">(Website)</a></small><br />
  mit einer Basisgröße von <code>16px</code> (<code>20px</code> ab großen Auflösungen).
</p>
<p>
  Für Icons aller Art kommt <code>Fort Awesome</code> <small><a href="https://fortawesome.com/" target="_blank">(Website)</a></small> zum Einsatz.<br />
  SVG-Icons nur, wenn sie nicht durch Fort Awesome abgedeckt sind.
</p>

<hr />

<h2>Responsivität</h2>

<p>
  Folgende Breakpoints werden für grundsätzliche gerätespezifische 
  Responsivität eingesetzt. Darüber hinaus werden aber auch Breakpoints so gesetzt, wie es für die jeweilige Designstelle 
  optimal ist.
</p>
<ul>
  <li><code>$XS: 320px;</code></li>
  <li><code>$S: 480px;</code></li>
  <li><code>$M: 640px;</code></li>
  <li><code>$L: 960px;</code></li>
  <li><code>$XL: 1400px;</code></li>
</ul>
<p class="tr">
  <a href="https://github.com/phoenixreisen/design-system/blob/master/src/_variables.scss" target="_blank">
    <small>Weitere Variablen <i class="fas fa-arrow-right ml1"></i></small>
  </a>
</p>

<hr />

<h2>Farben</h2>

<h3>Corporate Identity (CI)</h3>
<section class="kss-colors">
  <article class="kss-color">
    <div class="kss-color__preview primary"></div>
    <div class="kss-color__properties">
      <p>CI Phoenix Blau (primary)</p>
      <div><code>$primary</code></div>
      <div><code>#009EB4</code></div>
    </div>
  </article>
  
  <article class="kss-color">
    <div class="kss-color__preview primary-dark"></div>
    <div class="kss-color__properties">
      <p>CI Phoenix Blau (primary dark)</p>
      <div><code>$primary-dark</code></div>
      <div><code>#00377A</code></div>
    </div>
  </article>
</section>

<h3>Links</h3>
<section class="kss-colors">
  <article class="kss-color">
    <div class="kss-color__preview link"></div>
    <div class="kss-color__properties">
      <p>Hyperlink</p>
      <div><code>$link</code></div>
      <div><code>$primary</code></div>
    </div>
  </article>

  <article class="kss-color">
    <div class="kss-color__preview link-hover"></div>
    <div class="kss-color__properties">
      <p>Hyperlink - hovered</p>
      <div><code>$link--hover</code></div>
      <div><code>darken($link, 5%)</code></div>
    </div>
  </article>

  <article class="kss-color">
    <div class="kss-color__preview link-active"></div>
    <div class="kss-color__properties">
      <p>Hyperlink - active</p>
      <div><code>$link--active</code></div>
      <div><code>darken($link, 15%)</code></div>
    </div>
  </article>
</section>

<h3>Grautöne & -abstufungen</h3>
<section class="kss-colors">
  <article class="kss-color">
    <div class="kss-color__preview gray1"></div>
    <div class="kss-color__properties">
      <p>Grau I</p>
      <div><code>$gray1</code></div>
      <div><code>#333333</code></div>
    </div>
  </article>

  <article class="kss-color">
    <div class="kss-color__preview gray2"></div>
    <div class="kss-color__properties">
      <p>Grau II</p>
      <div><code>$gray2</code></div>
      <div><code>#666666</code></div>
    </div>
  </article>

  <article class="kss-color">
    <div class="kss-color__preview gray3"></div>
    <div class="kss-color__properties">
      <p>Grau III</p>
      <div><code>$gray3</code></div>
      <div><code>#7d7d7e</code></div>
    </div>
  </article>

  <article class="kss-color">
    <div class="kss-color__preview gray4"></div>
    <div class="kss-color__properties">
      <p>Grau IIII</p>
      <div><code>$gray4</code></div>
      <div><code>#cdcdce</code></div>
    </div>
  </article>

  <article class="kss-color">
    <div class="kss-color__preview gray5"></div>
    <div class="kss-color__properties">
      <p>Grau V</p>
      <div><code>$gray5</code></div>
      <div><code>#DCE0E7</code></div>
    </div>
  </article>

  <article class="kss-color">
    <div class="kss-color__preview gray6"></div>
    <div class="kss-color__properties">
      <p>Grau VI</p>
      <div><code>$gray6</code></div>
      <div><code>#EEEEF4</code></div>
    </div>
  </article>

  <article class="kss-color">
    <div class="kss-color__preview whitegray"></div>
    <div class="kss-color__properties">
      <p>Weiß-Grau</p>
      <div><code>$whitegray</code></div>
      <div><code>#fafafa</code></div>
    </div>
  </article>
</section>

<h3>Status-Farben</h3>
<section class="kss-colors">
  <article class="kss-color">
    <div class="kss-color__preview success"></div>
    <div class="kss-color__properties">
      <p>Erfolg</p>
      <div><code>$success</code></div>
      <div><code>#1CB841</code></div>
    </div>
  </article>

  <article class="kss-color">
    <div class="kss-color__preview info"></div>
    <div class="kss-color__properties">
      <p>Info</p>
      <div><code>$info</code></div>
      <div><code>#1F8DD6</code></div>
    </div>
  </article>

  <article class="kss-color">
    <div class="kss-color__preview warning"></div>
    <div class="kss-color__properties">
      <p>Warnung</p>
      <div><code>$warning</code></div>
      <div><code>#DF7514</code></div>
    </div>
  </article>

  <article class="kss-color">
    <div class="kss-color__preview danger"></div>
    <div class="kss-color__properties">
      <p>Krasse Warnung / Fehler</p>
      <div><code>$danger</code></div>
      <div><code>#CA3C3C</code></div>
    </div>
  </article>
</section>

<h3>Sonstige Farben</h3>
<section class="kss-colors">
  <article class="kss-color">
    <div class="kss-color__preview black"></div>
    <div class="kss-color__properties">
      <p>Schwarz</p>
      <div><code>$black</code></div>
      <div><code>#000000</code></div>
    </div>
  </article>

  <article class="kss-color">
    <div class="kss-color__preview white"></div>
    <div class="kss-color__properties">
      <p>Weiß</p>
      <div><code>$white</code></div>
      <div><code>#ffffff</code></div>
    </div>
  </article>

  <article class="kss-color">
    <div class="kss-color__preview yellow"></div>
    <div class="kss-color__properties">
      <p>Gelb</p>
      <div><code>$yellow</code></div>
      <div><code>#face49</code></div>
    </div>
  </article>
</section>
<p class="tr">
  <a href="https://github.com/phoenixreisen/design-system/blob/master/src/_variables.scss" target="_blank">
    <small>Weitere Variablen <i class="fas fa-arrow-right ml1"></i></small>
  </a>
</p>

<hr />

<h1>Überschrift 1</h1>

<h2>Überschrift 2</h2>

<h3>Überschrift 3</h3>

<h4>Überschrift 4</h4>

<h5>Überschrift 5</h5>

<h6>Überschrift 6</h6>

<hr />

<p>
  Paragraph - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
</p>
<p>
  Paragraph - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
</p>
<p>
  Paragraph - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
</p>
<p>
  Paragraph - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
</p>

<hr />

<table>
  <tr>
    <th>Kopfzelle</th>
    <th>Kopfzelle</th>
  </tr>
  <tr>
    <td>Tabellenzelle</td>
    <td>Tabellenzelle</td>
  </tr>
</table>

<hr />

<ul>
  <li>Unnummerierter Listenpunkt</li>
  <li>Unnummerierter Listenpunkt</li>
</ul>

<hr />

<ol>
  <li>Nummerierter Listenpunkt</li>
  <li>Nummerierter Listenpunkt</li>
</ol>

<hr />

<pre>
  Preformatted
</pre>

<hr />

<blockquote>
  Zitat
</blockquote>
