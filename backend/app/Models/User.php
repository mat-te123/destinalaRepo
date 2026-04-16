<?php
namespace App\Models;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable {
    use HasApiTokens;
    protected $table = 'Users';
    protected $primaryKey = 'Id';
    public $timestamps = false;
    protected $fillable = ['TenantId', 'Name', 'Email', 'Password'];
}