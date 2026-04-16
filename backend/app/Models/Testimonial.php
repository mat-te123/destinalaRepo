<?php
namespace App\Models;
use App\Models\Traits\BelongsToTenant;
use Illuminate\Database\Eloquent\Model;

class Testimonial extends Model {
    use BelongsToTenant;
    protected $table = 'Testimonials';
    protected $primaryKey = 'Id';
    public $timestamps = false;
    protected $fillable = ['TenantId', 'CustomerName', 'Role', 'Content', 'Rating', 'AvatarUrl'];
}