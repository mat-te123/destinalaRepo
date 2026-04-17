<?php
namespace App\Models;
use App\Models\Traits\BelongsToTenant;
use Illuminate\Database\Eloquent\Model;

class ServicePackage extends Model {
    use BelongsToTenant;
    protected $table = 'ServicePackages';
    protected $primaryKey = 'Id';
    public $timestamps = false;
    protected $fillable = ['TenantId', 'PackageName', 'Price', 'Features', 'IsActive', 'PdfPath'];
}