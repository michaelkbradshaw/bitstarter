




<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" id="vp" content="initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width">
  <meta name="viewport" id="vp" content="initial-scale=1.0,user-scalable=no,maximum-scale=1" media="(device-height: 568px)">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <link rel="apple-touch-icon-precomposed" href="apple-touch-icon-precomposed.png">
  <link rel="apple-touch-icon-precomposed" sizes="114x114" href="apple-touch-icon-114-precomposed.png">
  <meta name="google-analytics" content="UA-3769691-2">

  <meta content="authenticity_token" name="csrf-param" />
<meta content="Fd1Di+DnzhOBATQUcqtzRyBACzJTBefpdUXO+ghwlKM=" name="csrf-token" />

  <title>GitHub · Build software better, together.</title>

  <link href="https://github.global.ssl.fastly.net/assets/mobile-c7a02fd53f58d3edea8f4b04783bfe26576ba793.css" media="all" rel="stylesheet" type="text/css" />
  <script async="async" defer="defer" src="https://github.global.ssl.fastly.net/assets/mobile-bb3fea04b31369c27ccd6a6f36e4947fbc35cb6c.js" type="text/javascript"></script>
</head>
<body>
  

  <header class="nav-bar clearfix">
    <div class="nav-bar-inner container">
      

      <a href="#" class="header-button header-nav-button js-show-global-nav">
        <span class="octicon octicon-three-bars"></span>
      </a>

      <div class="nav-bar-title-text">
              <span class="octicon octicon-repo"></span>

    <strong><a href="/twitter">twitter</a></strong>
    /
    <strong><a href="/twitter/bootstrap">bootstrap</a></strong>

      </div>
    </div>

    <nav class="nav-bar-tabs repo-nav-bar-tabs">
      <ul>
        <li>
          <a href="/"><span class="octicon octicon-dashboard"></span> Dashboard</a>
        </li>
        <li>
            <a href="/login"><span class="octicon octicon-log-in"></span> Sign in</a>
        </li>

            <li class="section-title">This repository</li>
    <li><a href="/twitter/bootstrap?files=1"><span class="octicon octicon-code"></span> Code</a></li>
      <li><a href="/twitter/bootstrap/issues"><span class="octicon octicon-issue-opened"></span> Issues</a></li>
    <li><a href="/twitter/bootstrap/pulls"><span class="octicon octicon-git-pull-request"></span> Pull Requests</a></li>
    <li><a href="/twitter/bootstrap/pulse"><span class="octicon octicon-pulse"></span> Pulse</a></li>

      </ul>
    </nav>
  </header>

  

        


<div class="breadcrumb blob-breadcrumb">
  <label for="blob-history-checkbox" class="blob-history-label">
    <span class="octicon octicon-history"></span>
  </label>
  <span class="filetype-icon"><span class="octicon octicon-file-text"></span></span>
  <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/twitter/bootstrap/tree/master/js" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">js</span></a></span><span class="separator"> / </span><strong class="final-path">bootstrap-transition.js</strong>
</div>

<input id="blob-history-checkbox" type="checkbox">

<div class="blob-history">
  <a href="/twitter/bootstrap/commits/master/js/bootstrap-transition.js">
    <h4 class="branch-name">
      <span class="octicon octicon-git-branch"></span>
      master
    </h4>

    <span class="octicon octicon-history"></span>
    Last changed by
    <strong>fat</strong>
    2 months ago

</a></div>

<div class="blob-file-content">
    <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/* ===================================================</span></div><div class='line' id='LC2'><span class="cm"> * bootstrap-transition.js v2.3.2</span></div><div class='line' id='LC3'><span class="cm"> * http://twitter.github.com/bootstrap/javascript.html#transitions</span></div><div class='line' id='LC4'><span class="cm"> * ===================================================</span></div><div class='line' id='LC5'><span class="cm"> * Copyright 2012 Twitter, Inc.</span></div><div class='line' id='LC6'><span class="cm"> *</span></div><div class='line' id='LC7'><span class="cm"> * Licensed under the Apache License, Version 2.0 (the &quot;License&quot;);</span></div><div class='line' id='LC8'><span class="cm"> * you may not use this file except in compliance with the License.</span></div><div class='line' id='LC9'><span class="cm"> * You may obtain a copy of the License at</span></div><div class='line' id='LC10'><span class="cm"> *</span></div><div class='line' id='LC11'><span class="cm"> * http://www.apache.org/licenses/LICENSE-2.0</span></div><div class='line' id='LC12'><span class="cm"> *</span></div><div class='line' id='LC13'><span class="cm"> * Unless required by applicable law or agreed to in writing, software</span></div><div class='line' id='LC14'><span class="cm"> * distributed under the License is distributed on an &quot;AS IS&quot; BASIS,</span></div><div class='line' id='LC15'><span class="cm"> * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.</span></div><div class='line' id='LC16'><span class="cm"> * See the License for the specific language governing permissions and</span></div><div class='line' id='LC17'><span class="cm"> * limitations under the License.</span></div><div class='line' id='LC18'><span class="cm"> * ========================================================== */</span></div><div class='line' id='LC19'><br/></div><div class='line' id='LC20'><br/></div><div class='line' id='LC21'><span class="o">!</span><span class="kd">function</span> <span class="p">(</span><span class="nx">$</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC22'><br/></div><div class='line' id='LC23'>&nbsp;&nbsp;<span class="s2">&quot;use strict&quot;</span><span class="p">;</span> <span class="c1">// jshint ;_;</span></div><div class='line' id='LC24'><br/></div><div class='line' id='LC25'><br/></div><div class='line' id='LC26'>&nbsp;&nbsp;<span class="cm">/* CSS TRANSITION SUPPORT (http://www.modernizr.com/)</span></div><div class='line' id='LC27'><span class="cm">   * ======================================================= */</span></div><div class='line' id='LC28'><br/></div><div class='line' id='LC29'>&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC30'><br/></div><div class='line' id='LC31'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">support</span><span class="p">.</span><span class="nx">transition</span> <span class="o">=</span> <span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC32'><br/></div><div class='line' id='LC33'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">transitionEnd</span> <span class="o">=</span> <span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC34'><br/></div><div class='line' id='LC35'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">el</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s1">&#39;bootstrap&#39;</span><span class="p">)</span></div><div class='line' id='LC36'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">transEndEventNames</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC37'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;WebkitTransition&#39;</span> <span class="o">:</span> <span class="s1">&#39;webkitTransitionEnd&#39;</span></div><div class='line' id='LC38'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span>  <span class="s1">&#39;MozTransition&#39;</span>    <span class="o">:</span> <span class="s1">&#39;transitionend&#39;</span></div><div class='line' id='LC39'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span>  <span class="s1">&#39;OTransition&#39;</span>      <span class="o">:</span> <span class="s1">&#39;oTransitionEnd otransitionend&#39;</span></div><div class='line' id='LC40'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span>  <span class="s1">&#39;transition&#39;</span>       <span class="o">:</span> <span class="s1">&#39;transitionend&#39;</span></div><div class='line' id='LC41'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC42'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">name</span></div><div class='line' id='LC43'><br/></div><div class='line' id='LC44'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="nx">name</span> <span class="k">in</span> <span class="nx">transEndEventNames</span><span class="p">){</span></div><div class='line' id='LC45'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">el</span><span class="p">.</span><span class="nx">style</span><span class="p">[</span><span class="nx">name</span><span class="p">]</span> <span class="o">!==</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC46'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">transEndEventNames</span><span class="p">[</span><span class="nx">name</span><span class="p">]</span></div><div class='line' id='LC47'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC48'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC49'><br/></div><div class='line' id='LC50'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}())</span></div><div class='line' id='LC51'><br/></div><div class='line' id='LC52'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">transitionEnd</span> <span class="o">&amp;&amp;</span> <span class="p">{</span></div><div class='line' id='LC53'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">end</span><span class="o">:</span> <span class="nx">transitionEnd</span></div><div class='line' id='LC54'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC55'><br/></div><div class='line' id='LC56'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">})()</span></div><div class='line' id='LC57'><br/></div><div class='line' id='LC58'>&nbsp;&nbsp;<span class="p">})</span></div><div class='line' id='LC59'><br/></div><div class='line' id='LC60'><span class="p">}(</span><span class="nb">window</span><span class="p">.</span><span class="nx">jQuery</span><span class="p">);</span></div></pre></div>
</div>



  <footer class="clearfix">
    <div class="container">
      <div class="footer">
        <span class="mega-octicon octicon-mark-github"></span>

        <a href="/twitter/bootstrap/blob/master/js/bootstrap-transition.js?mobile=0">Desktop version</a>

        
      </div>
    </div>
  </footer>
</body>
</html>

