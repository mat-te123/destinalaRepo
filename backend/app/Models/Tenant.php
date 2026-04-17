<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class Tenant extends Model {
    protected $table = 'Tenants';
    protected $primaryKey = 'Id';
    public $timestamps = false;
    protected $fillable = ['Name', 'Slug', 'LogoUrl', 'PrimaryColor', 'SecondaryColor'];
}