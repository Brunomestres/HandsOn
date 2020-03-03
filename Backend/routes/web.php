<?php



Route::resource('/surfista','SurfistaController');
Route::resource('/ondas','OndaController');
Route::resource('/baterias','BateriaController');
Route::resource('/notas','NotaController');
Route::get('/winner/{id}','BateriaController@winner');
