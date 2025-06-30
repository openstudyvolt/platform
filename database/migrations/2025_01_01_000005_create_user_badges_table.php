<?php

use App\Models\User;
use App\Models\Badge;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('user_badges', static function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(User::class)->index()->constrained()->cascadeOnDelete();
            $table->foreignIdFor(Badge::class)->index()->constrained()->cascadeOnDelete();
            $table->timestamp('earned_at');
            $table->json('metadata')->nullable(); // Additional context about how badge was earned
            $table->timestamps();

            $table->unique(['user_id', 'badge_id']);
            $table->index(['user_id', 'earned_at']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_badges');
    }
};
