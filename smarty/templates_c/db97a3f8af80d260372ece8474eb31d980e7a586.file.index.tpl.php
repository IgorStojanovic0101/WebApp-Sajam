<?php /* Smarty version Smarty-3.1.13, created on 2018-09-04 13:30:02
         compiled from "tpl\index.tpl" */ ?>
<?php /*%%SmartyHeaderCode:306855b5f2da701a712-26820996%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'db97a3f8af80d260372ece8474eb31d980e7a586' => 
    array (
      0 => 'tpl\\index.tpl',
      1 => 1536067707,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '306855b5f2da701a712-26820996',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.13',
  'unifunc' => 'content_5b5f2da7720ba9_83439968',
  'variables' => 
  array (
    'fudbalerIzmena' => 0,
    'reprezentacija' => 0,
    'fudbaler' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5b5f2da7720ba9_83439968')) {function content_5b5f2da7720ba9_83439968($_smarty_tpl) {?><html>
    <head>
        <title>Junski 2018</title>
        <link rel="stylesheet" href="stil.css" />
    </head>
    
    
    <body>
        <?php if ((isset($_smarty_tpl->tpl_vars['fudbalerIzmena']->value))){?>
        <form action="index.php" method="post" >
            <input type="hidden" name="id" value="<?php echo $_smarty_tpl->tpl_vars['fudbalerIzmena']->value->id;?>
" />
            <div>Ime: <input type="text" name="ime" value="<?php echo $_smarty_tpl->tpl_vars['fudbalerIzmena']->value->ime;?>
" /></div>
            <div>Prezime: <input type="text" name="prezime" value="<?php echo $_smarty_tpl->tpl_vars['fudbalerIzmena']->value->prezime;?>
" /></div>
            <div>Broj dresa: <input type="text" name="broj_dresa" value="<?php echo $_smarty_tpl->tpl_vars['fudbalerIzmena']->value->broj_dresa;?>
" /></div>
            <div>Jaca noga: <input type="checkbox" name="jaca_nogaL" value="leva" <?php if (($_smarty_tpl->tpl_vars['fudbalerIzmena']->value->jaca_noga)=="leva"){?> checked <?php }?> />
			
            </div>
            <div>Povreda: <input type="radio" name="povredjen" value="1" <?php if (($_smarty_tpl->tpl_vars['fudbalerIzmena']->value->povredjen)){?> checked <?php }?> />DA
                <input type="radio" name="povredjen" value="0" <?php if ((!$_smarty_tpl->tpl_vars['fudbalerIzmena']->value->povredjen)){?> checked <?php }?> />NE
            </div>
            <div>Pozicja:
                <select name="pozicija">
                    <option value="napad">Napad</option>
                    <option value="vezni red">Vezni red</option>
                    <option value="odbrana">Odbrana</option>
                    <option value="golman">Golman</option>
                </select>
            </div>
            <div><input type="submit" name="prosledi" value="Prosledi" /></div>
            
        </form>
        <?php }?>
        
        
        <div>Reprezentacija <?php echo $_smarty_tpl->tpl_vars['reprezentacija']->value->naziv;?>
, trener <?php echo $_smarty_tpl->tpl_vars['reprezentacija']->value->trener;?>
</div>
        <table>
            <tr>
                <th>Ime</th>
                <th>Prezime</th>
                <th>Broj dresa</th>
                <th>Jaca noga</th>
                <th>Povreda</th>
                <th>Pozicija</th>
                <th></th>
            </tr>
            <?php  $_smarty_tpl->tpl_vars['fudbaler'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['fudbaler']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['reprezentacija']->value->listaFudbalera; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['fudbaler']->key => $_smarty_tpl->tpl_vars['fudbaler']->value){
$_smarty_tpl->tpl_vars['fudbaler']->_loop = true;
?>
            <tr>
                <td><?php echo $_smarty_tpl->tpl_vars['fudbaler']->value->ime;?>
</td>
                <td><?php echo $_smarty_tpl->tpl_vars['fudbaler']->value->prezime;?>
</td>
                <td><?php echo $_smarty_tpl->tpl_vars['fudbaler']->value->broj_dresa;?>
</td>
                <td><?php echo $_smarty_tpl->tpl_vars['fudbaler']->value->jaca_noga;?>
</td>
                <td><?php if (($_smarty_tpl->tpl_vars['fudbaler']->value->povredjen)){?>
                    DA
                    <?php }else{ ?>
                    NE
                    <?php }?>
                </td>
                <td><?php echo $_smarty_tpl->tpl_vars['fudbaler']->value->pozicija;?>
</td>
                <td><a href="index.php?id=<?php echo $_smarty_tpl->tpl_vars['fudbaler']->value->id;?>
">Izmeni</a></td>
            </tr>
            <?php } ?>
        </table>
    </body>
    
    
</html><?php }} ?>