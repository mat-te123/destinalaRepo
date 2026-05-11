namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PageConfig extends Model
{
    protected $table = 'PageConfigs';
    protected $primaryKey = 'Id';

    protected $fillable = [
        'TenantId',
        'PageKey',
        'ContentJson',
    ];
}