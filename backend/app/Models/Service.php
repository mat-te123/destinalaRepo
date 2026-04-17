<?php
namespace App\Models;

use App\Models\Traits\BelongsToTenant;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use BelongsToTenant;
    protected $table = 'Services';
    protected $primaryKey = 'Id';
    public $timestamps = false;
    protected $fillable = ['TenantId', 'Title', 'Description', 'Icon', 'IsFeatured', 'PdfPath'];
}