<?php

/* @var $this yii\web\View */

$this->title = 'Template Builder';

$dir = __DIR__ .'/../../../gsg/public/themes/common/widgets';
$widgetsList = scandir($dir);
?>

<!-- The Modal -->
<div id="myModal" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
        <span class="close">x</span>
        <div class="row">
            Select widget:<br/>
            <select id="widget_selector" class="form-control">
                <?php
                foreach ($widgetsList as $widget) {
                    if (strlen($widget) > 2) {
                        $wName = explode('.', $widget)[0];
                        ?>
                        <option value="<?= $wName ?>"><?= $wName ?></option>
                    <?php
                    }
                }
                ?>
            </select>
        </div>
        <button type=button" class="btn btn-default" id="btn_confirm_new_row">Confirm</button>
    </div>
</div>

<div id="all" class="row">
	<div id="tools" class="col-md-3">
		<h4>Tools</h4>
		<div id="tools_panel">
			<button class="accordion">Colors</button>
			<div class="panel">
			  	Primary color:<br/>
			 	<input id="primary_color" type="color" name="primary_color"><br/>
			 	Secondary color:<br/>
			  	<input id="secondary_color" type="color" name="secondary_color"><br/>
			  	Background color:<br/>
			  	<input id="background_color" type="color" name="background_color"><br/>
			  	<!-- <button id="btn_apply_changes" type="button" class="btn btn-default">Apply</button> -->
			</div>
			<button class="accordion">Widgets</button>
			<div class="panel">
			  	<select class="form-control">
			  		<?php
                    foreach ($widgetsList as $widget) {
                        if (strlen($widget) > 2) {
                            $wName = explode('.', $widget)[0];
                            ?>
                            <option value="<?= $wName ?>"><?= $wName ?></option>
                        <?php
                        }
                    }
                    ?>
			  	</select>
			  </div>
		</div>
	</div>
	<div id="editor" class="col-md-9">
		<h4>Editor</h4>
		<div id="canvas">
			<span id="btn_add_row" class="glyphicon glyphicon-plus"></span>
		</div>
	</div>
</div>