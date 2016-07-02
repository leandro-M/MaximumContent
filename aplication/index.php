<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="author" content="Leandro Medeiros">

        <?php include 'includes/styles.php' ?>
    </head>
    <body class="fixed-left">
        <div id="wrapper">
            <?php include 'includes/top_bar.php' ?>
            <?php include 'includes/left_menu.php' ?>
            <div class="content-page">
                <div class="content">
                    <div class="container">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <h4 class="pull-left page-title">Home</h4>
                                        <ol class="breadcrumb pull-right">
                                            <li><a href="#">Home</a></li>
                                            <li class="active">Dashboard</li>
                                        </ol>
                                        <div class="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <div class="row">
                                    <div class="col-md-12">
                                        Aqui irá todo o conteúdo
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <?php include 'includes/footer.php' ?>
            </div>
        </div>
        <?php include 'includes/scripts.php' ?>
    </body>
</html>