<?php
   include_once 'header.php';
?>

<section class="main-container">
   <div class="main-wrapper">
      <h2 class="gameName">Last Frontier</h2>
      <?php
         if (isset($_SESSION['u_id'])) {
            echo '<h2 class="welcome">Welcome '.$_SESSION['u_uid'].'!</h2>';
            echo '<a href="http://codd.cs.gsu.edu/~kchib1/mini_projects/3/lastFrontierMenu.html"><button type="button" class="continue">Continue to Game</button></a>';
         }
      ?>
   </div>
</section>

<?php
   include_once 'footer.php';
?>
